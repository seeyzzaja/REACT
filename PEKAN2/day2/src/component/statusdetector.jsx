import OnlineStatus from "./onlinestatus";
import OfflineStatus from "./offlinestatus";

function StatusDetector(Status) {
    const checkInternet = Status.checkInternet
    if (checkInternet) {
        return < OnlineStatus />;
    } else {
        return < OfflineStatus />;
    }
}

export default StatusDetector;
