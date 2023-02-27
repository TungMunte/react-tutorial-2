import { configureStore } from "@reduxjs/toolkit";
import {
  carReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slice/carSlice";
import { formReducer, changeName, changeCost } from "./slice/formSlice";

const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer,
  },
});

export { store, changeName, changeCost, changeSearchTerm, addCar, removeCar };
