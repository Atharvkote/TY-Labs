#include <iostream>
#include <sstream>

#include <bitset>
#include <math.h>
using namespace std;

// Helper function to print decimal + binary side by side
void printWithBinary(string label, int a, int b, int c, int d)
{
    cout << label << " : "
         << a << "." << b << "." << c << "." << d << "\n";
    cout << "Binary      : "
         << bitset<8>(a) << "."
         << bitset<8>(b) << "."
         << bitset<8>(c) << "."
         << bitset<8>(d) << "\n\n";
}

int main()
{
    string ipInput, maskInput;
    int ip1, ip2, ip3, ip4;
    int m1, m2, m3, m4;
    char dot;

    // Step 1: Input
    cout << "Step 1: Input\n";
    cout << "-------------\n";
    cout << "Enter IP Address (e.g., 192.168.1.10): ";
    cin >> ipInput;
    stringstream ipStream(ipInput);
    ipStream >> ip1 >> dot >> ip2 >> dot >> ip3 >> dot >> ip4;

    cout << "Enter Subnet Mask (e.g., 255.255.0.0): ";
    cin >> maskInput;
    stringstream maskStream(maskInput);
    maskStream >> m1 >> dot >> m2 >> dot >> m3 >> dot >> m4;

    printWithBinary("IP Address  ", ip1, ip2, ip3, ip4);
    printWithBinary("Subnet Mask ", m1, m2, m3, m4);

    // Step 2: Prefix Calculation
    cout << "Step 2: Prefix Calculation\n";
    cout << "--------------------------\n";
    int maskOctets[4] = {m1, m2, m3, m4};
    int prefixLength = 0;
    for (int i = 0; i < 4; i++)
    {
        int octet = maskOctets[i];
        for (int b = 7; b >= 0; b--)
        {
            if ((octet >> b) & 1)
                prefixLength++;
        }
    }
    cout << "Prefix Length : /" << prefixLength << "\n";
    int hostBits = 32 - prefixLength;
    cout << "Host Bits     : " << hostBits << "\n\n";

    // Step 3: Network & Broadcast
    cout << "Step 3: Network & Broadcast\n";
    cout << "----------------------------\n";
    int net1 = ip1 & m1;
    int net2 = ip2 & m2;
    int net3 = ip3 & m3;
    int net4 = ip4 & m4;
    printWithBinary("Network ID   ", net1, net2, net3, net4);

    int brd1 = net1 | (~m1 & 255);
    int brd2 = net2 | (~m2 & 255);
    int brd3 = net3 | (~m3 & 255);
    int brd4 = net4 | (~m4 & 255);
    printWithBinary("Broadcast Addr", brd1, brd2, brd3, brd4);

    // Step 4: Subnetting Details
    cout << "Step 4: Subnetting Details\n";
    cout << "---------------------------\n";
    int usableHosts = (hostBits >= 2) ? ((1 << hostBits) - 2) : 0;

    // Find default prefix based on class
    int defaultPrefix;
    if (ip1 <= 127)
        defaultPrefix = 8; // Class A
    else if (ip1 <= 191)
        defaultPrefix = 16; // Class B
    else
        defaultPrefix = 24; // Class C

    int borrowedBits = prefixLength - defaultPrefix;
   

    int totalSubnets = pow(2 ,prefixLength - 16);

    cout << "Total Subnets  : " << totalSubnets << "\n";
    cout << "Usable Hosts   : " << usableHosts << "\n";

    if (usableHosts >= 2)
    {
        int first1 = net1, first2 = net2, first3 = net3, first4 = net4 + 1;
        int last1 = brd1, last2 = brd2, last3 = brd3, last4 = brd4 - 1;

        printWithBinary("First Host   ", first1, first2, first3, first4);
        printWithBinary("Last Host    ", last1, last2, last3, last4);
    }
    else
    {
        cout << "No usable hosts available in this subnet.\n";
    }

    cout << "========================================\n";
    return 0;
}
