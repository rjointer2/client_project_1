
import { Rectangle } from "./gameTypeDefs";

export type currentClient = {
    id: string;
    // at first this property can be null before connection is made
    rectangle: Rectangle | null
}