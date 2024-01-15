import { useEffect, useMemo } from "react";
import "./App.css";
import CustomRoutes from "./routes";
import PageNotFound from "./pages/notfound";
import { useGeolocated } from "react-geolocated";
import { useAppDispatch } from "./store";
import { setCoordinate } from "./store/reducers/authSlice";

function App() {
  const dispatch = useAppDispatch();
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
  }, [
    isGeolocationAvailable,
    isGeolocationEnabled,
    coords?.latitude,
    coords?.longitude,
  ]);

  return isEnableGeoLocation.isEnable ? (
    <CustomRoutes />
  ) : (
    <PageNotFound
      isGeoLocationEnable={isEnableGeoLocation.isEnable}
      message={isEnableGeoLocation.message}
    />
  );
}

export default App;
