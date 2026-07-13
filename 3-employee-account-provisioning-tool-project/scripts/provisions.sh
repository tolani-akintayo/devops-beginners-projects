#!/bin/bash

INPUT_FILE="../input-files/employees.txt"
EMPLOYEE_DIR="../employees"
LOG_FILE="../logs/provision.log"

mkdir -p "$EMPLOYEE_DIR"
mkdir -p "../logs"

log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
}

while read -r employee
do
    if [ -z "$employee" ]; then
        continue
    fi

    USER_DIR="$EMPLOYEE_DIR/$employee"

    if mkdir -p "$USER_DIR"; then

        echo "Welcome to the company, $employee!" > "$USER_DIR/welcome.txt"
        echo "Your employee workspace has been created." >> "$USER_DIR/welcome.txt"

        log_message "SUCCESS: Created directory and welcome file for $employee"

    else
        log_message "ERROR: Failed to create resources for $employee"
    fi

done < "$INPUT_FILE"

echo "Provisioning completed."
