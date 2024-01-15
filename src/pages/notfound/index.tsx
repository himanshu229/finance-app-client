import React, { FunctionComponent } from "react";

interface PropsType {
  isGeoLocationEnable?: boolean;
  message?: string;
}

const PageNotFound: FunctionComponent<PropsType> = (props) => {
  const { isGeoLocationEnable = true, message = "" } = props;
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-bl from-darkBlue via-lighterBlue to-lightestBlue">
      <h1 className="text-white font-bold">
        {isGeoLocationEnable ? "Page Not Found" : message}
      </h1>
    </div>
  );
};

export default PageNotFound;
