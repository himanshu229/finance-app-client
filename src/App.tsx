import { useEffect, useMemo, useState } from "react";
import { useGeolocated } from "react-geolocated";
import VerifyAccount from "./pages/authentication/verify-account/Index";
import PageNotFound from "./pages/notfound";
import CustomRoutes from "./routes";
import { useAppDispatch, useAppSelector } from "./store";
import { setCoordinate } from "./store/reducers/authSlice";
import UserInfo from "./service/userInfo";
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
  useEffect(() => {
    const lng = localStorage.getItem("lng");
    if (!lng) {
      localStorage.setItem("lng", "en");
    }
    if (!!token) {
      dispatch(UserInfo.information());
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
      <VerifyAccount />
    </>
  ) : (
    <PageNotFound
      isGeoLocationEnable={isEnableGeoLocation.isEnable}
      message={isEnableGeoLocation.message}
    />
  );
}

export default App;
