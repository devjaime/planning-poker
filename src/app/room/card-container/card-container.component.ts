import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-card-container',
    templateUrl: './card-container.component.html',
    styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent {
    @Input() selectedValue: number;
    @Input() options: number[];
    @Input() canChangeSelection: boolean;
    @Output() selectRequest: EventEmitter<number> = new EventEmitter<number>();

    public selectValue (value: number): void {
        if (this.canChangeSelection) {
            this.selectRequest.emit(value);
        }
    }

    public isSelected (value: number): boolean {
        return this.selectedValue === value;
    }

}
