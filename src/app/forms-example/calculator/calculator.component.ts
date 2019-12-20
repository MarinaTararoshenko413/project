import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'mt-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {
    // field password
    passwordEnter = String(); // Real password input
    password = []; // For display on view
    isDeleteBtnActive: boolean = false;
    isZeroBtnDisabled: boolean = true;
    isPassowrEnd: boolean = false;
    isErrorPassowrd: boolean = false;

    maskList = [
        {
            text: 'panorama_fish_eye',
            isHide: false
        }, {
            text: 'panorama_fish_eye',
            isHide: false
        }, {
            text: 'panorama_fish_eye',
            isHide: false
        }, {
            text: 'panorama_fish_eye',
            isHide: false
        }, {
            text: 'panorama_fish_eye',
            isHide: false
        }, {
            text: 'panorama_fish_eye',
            isHide: false
        }
    ];

    constructor(
    ) {
    }

    ngOnInit() {
    }

    selectedBtn(value: string): void {
        this.isDeleteBtnActive = true;

        if (value !== 'B') {
            if (this.passwordEnter.length > 5) {
                return;
            } else {
                this.isZeroBtnDisabled = this.password.length > 3 ? false : true;

                if (value === '00') {
                    this.password.push('0');
                    this.password.push('0');
                } else {
                    this.password.push(value);
                }
                this.passwordEnter = this.passwordEnter + value;
                this.maskList[this.password.length - 1].isHide = true;

                if (this.password.length > 1) {
                    for (let i = 0; i <= this.password.length - 2; i++) {
                        this.maskList[i].text = 'lens';
                        this.maskList[i].isHide = false;
                    }
                }

                if (this.password.length > 5) {
                    setTimeout(() => {
                        this.maskList[this.password.length - 1].text = 'lens';
                        this.maskList[this.password.length - 1].isHide = false;
                        this.isPassowrEnd = true;
                    }, 1000);
                }
            }
        } else {
            this.password = this.password.slice(0, -1);
            this.passwordEnter = this.passwordEnter.slice(0, -1);
            this.maskList[this.password.length].text = 'panorama_fish_eye';
            this.maskList[this.password.length].isHide = false;
            this.isDeleteBtnActive = this.password.length < 1 ? false : true;
            this.isZeroBtnDisabled = this.password.length > 4 ? false : true;
            this.isPassowrEnd = false;
        }
    }

}
