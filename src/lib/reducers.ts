import { Picture } from "@/app/model/Picture";

const initialState: { pictures: Picture[]; loading: boolean } = {
    pictures: [],
    loading: true
}

const picturesReducer = (state = initialState, action: any) => {
    
    switch (action.type) {
        case "getPicturesDataSuccess":
            return {
                pictures: action.payload,
                loading: false
            }

        default: 
            return state    
    }
}

export default picturesReducer;