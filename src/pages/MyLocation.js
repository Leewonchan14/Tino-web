import { useGeolocated } from "react-geolocated";

export const MY_LOCATION_PATH = "/location";

const MyLocation = () =>{
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
        onSuccess: (e)=>{
            console.log("위치 정보 요청 완료!");
            let { latitude, longitude } = e.coords;
            console.log("위도:", latitude);
            console.log("경도:", longitude);
        },
        onError: (error) => {
            console.error("Error occurred while fetching position:", error);
        },
    });
}

export default MyLocation;