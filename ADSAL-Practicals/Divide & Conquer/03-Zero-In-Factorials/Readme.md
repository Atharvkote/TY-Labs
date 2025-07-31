// Implement a problem of smallest number with at least no trailing 
// zeroes in factorial.   
// Statement: Given a number n. The task is to find the smallest number 
// whose factorial contains at least n trailing zeroes. 


#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int n;
    int ans = 0;
    int high;
    int low, j = 1;
    int mid, iter = 1;
    int store;
    cout << "enter the input ";
    cin >> n;

    high = n * 5;
    low = 5;

    while (low <= high)
    {
        ans = 0;
        iter = 1;
        j = 1;
        mid = (((high + low) / 2) / 5) * 5;
        low=mid+5;
        store = (mid / pow(5, iter));

        while (store > 0)
        {
       
            iter++;
            store = (mid / pow(5, iter));
        }
      
        while (iter > j)
        {
            ans += mid / pow(5, j);
            j++;
        }

        if (ans == n)
        {
            cout << mid << "vhas " << n << "vtrailing zeroes";
            break;
        }

        if (ans > n)
        {
            cout << "there is no solution for n = " << n;
            break;
        }
    }
}

