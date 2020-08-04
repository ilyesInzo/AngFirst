import { Subject } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MyService {

    elementsSubject = new Subject<any[]>();

    private elements = [
       { id: 1, name: "Ilyes", etat: 1 },
        { id: 2, name: "Ali", etat: 1 },
        { id: 3, name: "Sami", etat: 0 }
    ];

    constructor(private httpClient: HttpClient) { }

    notifyElementChanges() {
        this.elementsSubject.next(this.elements.slice());
    }

    addElement(name: string, etat: number) {

        this.elements.push({
            id: this.elements[this.elements.length - 1].id++,
            name: name,
            etat: etat
        });
        //this.saveOneElement(this.elements[this.elements.length - 1]);
        
        this.saveElements();

    }

    // we will notify the change every time
    onTurnOnAll() {

        for (let elent of this.elements) {

            elent.etat = 1;

        }
        this.notifyElementChanges();
    }

    onTurnOffAll() {
        for (let elent of this.elements) {

            elent.etat = 0;

        }
        this.notifyElementChanges();
    }

    switchOneOn(index: number) {
        this.elements[index].etat = 1;
        this.notifyElementChanges();
    }

    switchOneOff(index: number) {
        this.elements[index].etat = 0;
        this.notifyElementChanges();
    }

    getElementByid(id: number) {

        return this.elements.find((element) => {

            return element.id === id;

        })

    }

    saveOneElement(newElement){

        this.httpClient.post("https://databaseang.firebaseio.com/elements.json", newElement).subscribe(
            () => {
                console.log("Saved")
            },
            () => {
                console.log("Error")
            })

    }

    saveElements() {

        this.httpClient.put("https://databaseang.firebaseio.com/elements.json", this.elements).subscribe(
            () => {
                console.log("Saved")
                this.notifyElementChanges();
            },
            () => {
                console.log("Error")
            })
    }

    getElements() {

        this.httpClient.get<any[]>("https://databaseang.firebaseio.com/elements.json").subscribe(
            (response) => {
                this.elements = response;
                console.log(response);
                this.notifyElementChanges();
            },
            (error) => {
                console.log("Error ", error);
            }
            
        )
    }

}