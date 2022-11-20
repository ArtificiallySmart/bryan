import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'bryan-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterContentInit {
  x = 0;
  y = 0;
  leftX = 0;
  leftY = 0;
  rightX = 0;
  rightY = 0;

  ngAfterContentInit() {
    const leftEyeEl = document.getElementById('leftEye');
    const rightEyeEl = document.getElementById('rightEye');
    if (!leftEyeEl || !rightEyeEl) {
      return;
    }
    const leftEye = leftEyeEl.getBoundingClientRect();
    const rightEye = rightEyeEl.getBoundingClientRect();

    this.leftX = leftEye.left + leftEye.width / 2;
    this.leftY = leftEye.top + leftEye.height / 2;
    this.rightX = rightEye.left + rightEye.width / 2;
    this.rightY = rightEye.top + rightEye.height / 2;

    document.addEventListener('mousemove', (e) => {
      this.x = e.clientX;
      this.y = e.clientY;

      const leftAngle = this.angle(this.x, this.y, this.leftX, this.leftY);
      const rightAngle = this.angle(this.x, this.y, this.rightX, this.rightY);

      leftEyeEl.style.transform = `rotate(${leftAngle}deg)`;
      rightEyeEl.style.transform = `rotate(${rightAngle}deg)`;
    });
  }

  angle(mouseX: number, mouseY: number, elX: number, elY: number) {
    const dx = elX - mouseX;
    const dy = elY - mouseY;
    const ang = Math.atan2(dy, dx);
    const deg = (ang * 180) / Math.PI;
    return deg;
  }
}
