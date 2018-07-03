## Description

Automatic parking ticketing system build on python. When user come to park his/her vahicle, system automatically generates ticket and allot a slot to that vahicle. When user came back to take his/her vahicle, they have give slot number in which thay have parked their vehicle.

It has some functions that returns aggegrated value of desired result. That are getting all vahicles by its color, getting vahicle regestration number based on slot etc. Operator can get status of parking lot at any point of time by status function.

To run solution after extracting zip file, you have to run `./parking_lot`.

It will run test case and it'll run parking_lot.py file after that. Once full file is processed it will show its output in terminal. After that it'll enter into interactive mode. Below are commands description to interact with ParkingLot system.

`create_parking_lot` - It will create a parking lot with given slot number. It expet one argument total slots.

`park` - It will park vehicle into park. It expects two arguments vahicle registration number and color of vehicle.

`leave` - It will empty given slot number, so that it will be available for future use. It expects one arnument slot number.

`status` - It will print current state of parking to terminal.

`slot_numbers_for_cars_with_colour` - It will print slot numbers where cars with particular color is parked. It expet one argument color.

`registration_numbers_for_cars_with_colour` - It will print registration number of all cars with particular color. It expet one argument color.

`slot_number_for_registration_number` - It will print slot number in which given car is parked. It expet one argument registration number.

`exit` - It will terminate interactive shell for ParkingLot.
