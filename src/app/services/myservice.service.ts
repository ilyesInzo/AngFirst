import { identifierModuleUrl } from '@angular/compiler';

export class MyService {

    elements = [
        { id: 1, name: "Ilyes", etat: 1 },
        { id: 2, name: "Ali", etat: 1 },
        { id: 3, name: "Sami", etat: 0 }
    ]

    onTurnOnAll() {

        for (let elent of this.elements) {

            elent.etat = 1;

        }
    }

    onTurnOffAll() {
        for (let elent of this.elements) {

            elent.etat = 0;

        }
    }

    switchOneOn(index: number) {
        this.elements[index].etat = 1;
    }

    switchOneOff(index: number) {
        this.elements[index].etat = 0;

    }

    getElementByid(id: number) {

        return this.elements.find((element) => {

            return element.id === id;

        })

    }

}