# Attendance system App

### Client Requirements :

We need an attendance system. Student can create their own profile . Admin can see list all student and their attendances . Admin can enable or disable button also this button can be disabled based on a timer. Each time admin enable attend button, students can participate for only once. Each day, student will have a timesheet of attendance.

Student can see their own time logs and attend button when enabled.

## Functional Requirements :

### Student :

- student can register with email or phone number.
- there will be a following account status for a student-

         1. pending

          2. active

           3. reject

- student can login with their credentials.
- Active student can update their profile :

        First Name, Last Name, profile picture

- pending and rejected student wont have anything in their profile.
- Active student can participate in attendance system.
- Active student can update own password.
- active student can see their timesheet
- Student can log out.

## Admin :

- Admin can create a student .
- Admin can check, update, and delete student information.
- Admin can change student status.
- Admin can enable and disable attend button for certain times.
- Admin can check stats of a given day
- Admin can change status of a student

## Requirement Analysis :

### Models :

### User

- Name
- Email
- Password
- Account Status
- Roles

### Profile

- First Name
- Last name
- phone no
- Avatar
- UserId

### StudentAttendance

- userId
- AdminAttendanceId
- CreatedAt

### AdminAttendance

- CreatedAt- date time
- Status
- Time Limit

### Endpoints

### student Endpoints

- POST/ auth/ register - [public]
- POST/ auth / login - [public]
- PATCH/ profile -[private]
- PATCH/ profile/ avatar - [private]
- PUT/ auth/ change-password - [private]
- GET/ attendance - [private]
- GET/ timesheet - [private]
- GET/ attendanceStatus - [private]

### Admin Endpoints

- GET/ users - [private]
- POST/ users - [private]
- GET/ users/ userID - [private]
- PATCH/ users/ userID - [private]
- DELETE/ users/ userID - [private]
- GET/ profiles- [private]
- POST/ profiles - [private]
- GET/ profiles/ profileID - [private]
- PATCH/ profiles/ profileID - [private]
- DELETE/ profiles/ profileID - [private]
- GET/ attendance/enable -[private]
- GET/ attendance/ disable / attendanceID - [private]
- GET/ timesheet / userID - [private]
- GET/ timesheet/ stats - [private]
