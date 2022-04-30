// Authentication service.
import axios from "axios";

const addProject = async (projectName, location, src) => {
    const response = await axios.post(
        "https://warm-cove-25020.herokuapp.com/api/profile/addproject/:profileId",
        {
            projectName, location, src
        },
        {
            headers: {
                "content-type": "application/json",
            },
        }
    );

    return response.data;
};


const PersonelService = {
    addProject
};

export default PersonelService;