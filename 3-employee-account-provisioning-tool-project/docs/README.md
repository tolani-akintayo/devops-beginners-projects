This Bash script automates the onboarding process for new employees. It reads employee names from an input file, creates a dedicated directory for each employee, generates a welcome message, and records all actions in a log file.

Directory Structure
scripts/ – Contains the provisioning script.
input-files/ – Contains the employee input file.
employees/ – Stores generated employee directories.
logs/ – Stores execution logs.
docs/ – Project documentation.
screenshots/ – Screenshots of script execution.

How It Works
Reads employee names from input-files/employees.txt.
Creates a directory for each employee inside employees/.
Generates a welcome.txt file containing a welcome message.
Logs successful operations and errors to logs/provision.log.

Running the Script

Navigate to the scripts directory and execute:

chmod +x provisions.sh
./provisions.sh

Logging

All provisioning activities are recorded in:

logs/provision.log
