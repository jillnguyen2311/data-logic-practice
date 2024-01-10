import { useState } from "react";

enum CarStatus {
    Sold = 'SOLD',
    Available = 'AVAILBALE',
    Pending = 'PENDING'
}

export default function EnumPage() {

    const [currentCar, setCurrentCar] = useState(CarStatus.Sold)

    return (
        <>
            {
                CarStatus.Sold && <p>SOLD</p>
            }

            {
                CarStatus.Available && <p>AVAILBALE</p>
            }

            {
                CarStatus.Pending && <p>PENDING</p>
            }

            <h1>more logic</h1>

            {currentCar === CarStatus.Sold && <p>The car has been sold</p>}
            {currentCar === CarStatus.Available && <p>The car is still available</p>}
            {currentCar === CarStatus.Pending && <p>The car is pending</p>}
        </>
    )

}