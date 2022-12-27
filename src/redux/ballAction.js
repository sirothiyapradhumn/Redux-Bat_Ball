export const buyBall = (qty) => {
    console.log("buying ball"); //intermeditry things
    return {
        type: "BUY_BALL",
        payload: qty,
    }
}