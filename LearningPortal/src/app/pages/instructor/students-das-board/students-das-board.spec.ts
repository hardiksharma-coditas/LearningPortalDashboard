import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDasBoard } from './students-das-board';

describe('StudentsDasBoard', () => {
  let component: StudentsDasBoard;
  let fixture: ComponentFixture<StudentsDasBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsDasBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsDasBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
