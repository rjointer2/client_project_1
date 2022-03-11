
export type Rectangle = {
    [id: string]: any
    height: number,
    width: number,
    // we have access to this prop so when it's jumping we define 
    // flase in the air
    jumping: boolean,
    x_velocity: number,
    x: number, // on the ground
    y_velocity: number,
    y: number,
}