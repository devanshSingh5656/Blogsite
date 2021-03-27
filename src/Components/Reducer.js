import { MAIN_DATA, Fetch, UPDATE, ADD_DATA, DELETE_DATA } from "./type";

export const initialState = {
  data: [],
  MainData: [],
  Save: [],
};

const Reducer = (state, action) => {
  switch (action.type) {
    case Fetch: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case MAIN_DATA: {
      return {
        ...state,
        MainData: [...state.MainData, action.payload],
      };
    }
    case UPDATE: {
      return {
        ...state,

        MainData: [state.MainData[0].concat([action.payload])],
      };
    }
    // case 'CLEAR':{

    //     return {
    //         ...state,
    //         data:[],

    //     }
    // }
    case ADD_DATA: {
      return {
        ...state,
        Save: [...state.Save, action.payload],
        // .filter((e)=>{
        //     if(e.title!==action.items.title){
        //         return e;
        //     }
        // })
      };
    }
    case DELETE_DATA: {
      const index = state.Save.findIndex(
        (SavedItem) => SavedItem.id === action.payload
      );
      let newSave = [...state.Save];
      if (index >= 0) {
        newSave.splice(index, 1);
      } else {
        console.log("item not in list");
      }
      return {
        ...state,
        Save: newSave,
      };
    }

    default:
      return { ...state };
  }
};
export default Reducer;
