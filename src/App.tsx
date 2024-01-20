import { useEffect, useLayoutEffect, useMemo } from "react";
import { useGeolocated } from "react-geolocated";
import PageNotFound from "./pages/notfound";
import CustomRoutes from "./routes";
import UserInfo from "./service/userInfo";
import { useAppDispatch, useAppSelector } from "./store";
import { setCoordinate } from "./store/reducers/authSlice";
import AppLoading from "./components/AppLoading";
import { GetCookies } from "./helper/cookiesStore";
import ApiService from "./service/apiService";
function App() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.authInfo.token);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useLayoutEffect(() => {
    const token = GetCookies("auth_user") ?? null;
    if (!!token) {
      ApiService.setToken(token);
    }
  }, []);

  useEffect(() => {
    const lng = localStorage.getItem("lng");
    if (!lng) {
      localStorage.setItem("lng", "en");
    }
    if (!!token) {
      dispatch(UserInfo.userInfomation());
    }
  }, []);

  const isEnableGeoLocation = useMemo(() => {
    if (!isGeolocationAvailable) {
      return {
        isEnable: false,
        message: "Your browser does not support Geolocation",
        isRoute: false,
      };
    }
    if (!isGeolocationEnabled) {
      return {
        isEnable: false,
        message: "Please Allow your Geolocation",
        isRoute: false,
      };
    }

    dispatch(
      setCoordinate({
        lat: coords?.latitude,
        long: coords?.longitude,
      })
    );

    return {
      isEnable: true,
      message: "",
      isRoute: true,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isGeolocationAvailable,
    isGeolocationEnabled,
    coords?.latitude,
    coords?.longitude,
  ]);

  return isEnableGeoLocation.isEnable ? (
    <>
      <CustomRoutes />
      <AppLoading />
    </>
  ) : (
    <PageNotFound
      isGeoLocationEnable={isEnableGeoLocation.isEnable}
      message={isEnableGeoLocation.message}
    />
  );
}

export default App;
