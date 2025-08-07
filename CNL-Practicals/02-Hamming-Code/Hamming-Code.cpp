#include<iostream>
using namespace std;

int R1[] = {0, 2, 4, 6}; // Parity bit at index 0
int R2[] = {1, 2, 5, 6}; // Parity bit at index 1
int R3[] = {3, 4, 5, 6}; // Parity bit at index 3

void encode(int message[], int encodedMessage[]) {
    // Place data bits
    encodedMessage[2] = message[0]; // D1
    encodedMessage[4] = message[1]; // D2
    encodedMessage[5] = message[2]; // D3
    encodedMessage[6] = message[3]; // D4

    // Calculate parity bits
    encodedMessage[0] = encodedMessage[R1[1]] ^ encodedMessage[R1[2]] ^ encodedMessage[R1[3]]; // P1
    encodedMessage[1] = encodedMessage[R2[1]] ^ encodedMessage[R2[2]] ^ encodedMessage[R2[3]]; // P2
    encodedMessage[3] = encodedMessage[R3[1]] ^ encodedMessage[R3[2]] ^ encodedMessage[R3[3]]; // P3
}

void errorHandler(int encodedMessage[]) {
    int s1 = encodedMessage[R1[0]] ^ encodedMessage[R1[1]] ^ encodedMessage[R1[2]] ^ encodedMessage[R1[3]];
    int s2 = encodedMessage[R2[0]] ^ encodedMessage[R2[1]] ^ encodedMessage[R2[2]] ^ encodedMessage[R2[3]];
    int s3 = encodedMessage[R3[0]] ^ encodedMessage[R3[1]] ^ encodedMessage[R3[2]] ^ encodedMessage[R3[3]];

    int errorPosition = s3 * 4 + s2 * 2 + s1 * 1;

    if (errorPosition == 0) {
        cout << "No error detected in received message." << endl;
    } else {
        cout << "Error detected at bit position: " << errorPosition << endl;
        // Correct the bit
        encodedMessage[errorPosition - 1] ^= 1;
        cout << "Error corrected." << endl;
    }
}

void receiver(int encodedMessage[]) {
    errorHandler(encodedMessage);
    cout << "Decoded 4-bit Message: ";
    cout << encodedMessage[2] << " " << encodedMessage[4] << " " << encodedMessage[5] << " " << encodedMessage[6] << endl;
}

void send(int message[]) {
    int encodedMessage[7];
    cout << "\nEncoding Message using Hamming Code..." << endl;
    encode(message, encodedMessage);
    cout << "Encoded 7-bit Message: ";
    for (int i = 0; i < 7; i++) {
        cout << encodedMessage[i] << " ";
    }
    cout << endl;

    // Introduce optional error (for testing)
    char choice;
    cout << "Do you want to introduce an error? (y/n): ";
    cin >> choice;
    if (choice == 'y' || choice == 'Y') {
        int pos;
        cout << "Enter position (1-7) to introduce error: ";
        cin >> pos;
        if (pos >= 1 && pos <= 7) {
            encodedMessage[pos - 1] ^= 1;
            cout << "Error introduced at position " << pos << "." << endl;
        } else {
            cout << "Invalid position. No error introduced." << endl;
        }
    }

    cout << "Sending Message to Receiver...\n" << endl;
    receiver(encodedMessage);
}

int main() {
    int message[4];
    cout << "Enter your 4-bit message (bits 0 or 1):" << endl;
    for (int i = 0; i < 4; i++) {
        do {
            cout << "Bit " << i << ": ";
            cin >> message[i];
            if (message[i] != 0 && message[i] != 1) {
                cout << "Invalid input. Enter 0 or 1." << endl;
            }
        } while (message[i] != 0 && message[i] != 1);
    }

    send(message);
    return 0;
}
