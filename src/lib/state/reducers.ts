import { Picture } from "@/app/model/Picture";

const initialState: { favorites: Picture[] } = {
    favorites: [],
}

const favoritePicturesReducer = (state = initialState, action: any) => {
    
    switch (action.type) {
        case "addPictureToFavorites":
            return {
                pictures: state?.favorites.push(action.payload),
            }

        default: 
            return state    
    }
}

export default favoritePicturesReducer;