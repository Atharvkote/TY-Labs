#include<iostream>
using namespace std;

int main(){
	int nums[10],choice = 1,ans;
	int i = 0;
	bool flag = false;

	while(i <= 10){
		cout << "Enter array[ " << i << " ] (Enter 2 to exit):: ";
		cin >> choice;
		cout << endl;
		if(choice > 1) break;
		if(choice == 0 && flag == false){
			flag = true;
		}
		if(choice != 0 && flag){
			cout << "Invalid Input Can't insert 1 after 0 " << endl;
			return 0;
		}
		nums[i] = choice;
		i++;
	}

	int low = 0 ;
	int high = i - 1;

	while(low < high){
		int mid =  ( low + high ) / 2;
		if(nums[mid] == 0 && nums[mid - 1] == 1 || nums[mid] == 1 && nums[mid + 1] == 0){
			ans = i - mid - 1;
			break;
		}else if(nums[mid] == 0 && nums[mid - 1] != 1){
			high = mid - 1;
		}else if(nums[mid] == 1 && nums[mid + 1] != 0){
			low = mid + 1;
		}
	}

	cout << "Number of Zeros are : " << ans << endl;
	return 0;
}
