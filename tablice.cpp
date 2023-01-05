#include <iostream>
#include <cstdlib>

using namespace std;

void wylosuj(int Tab[100]){
    for(int i=0; i<100; i++){
        Tab[i]=rand()%100;
    }
}

void wypisz(int Tab[100]){
    for(int i=0;i<100;i++){
        cout << Tab[i]<< " ";
    }
}

main(){
    cout << "test";
    int Tablica[100];
    srand(time(NULL));
    wylosuj(Tablica);
    wypisz(Tablica);
    return 0;
}