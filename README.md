# Parking Management Application

This project is a Parking Management Application built with Next.js and Convex. It allows users to register their vehicles and allocate parking spaces for specified durations. The system utilizes Convex's cron jobs to periodically verify expired parking sessions and notify administrators of vehicles that have overstayed, facilitating the issuance of fines.

## Features

- **Vehicle Registration**: Users can register their vehicles by providing the license plate number.
- **Automated Session Monitoring**: The system runs hourly checks on active parking sessions to identify sessions that have exceeded their allocated time.
- **Notifications and Fines**: Administrators or enforcement officers are notified of vehicles with expired sessions, facilitating the issuance of fines (TO BE ADDED).

## Usage

- **Register Vehicle**: Users can register their vehicles by providing the license plate number.
- **Monitor Sessions**: Administrators can monitor active parking sessions and identify vehicles that have overstayed.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **Convex**: A backend platform providing database management and serverless functions.
- **Tailwind CSS**: A utility-first CSS framework for styling web applications.
- **shadcn/ui**: A UI component library for React applications.
