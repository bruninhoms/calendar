import {
  TestBed,
  async,
  ComponentFixture,
  waitForAsync,
} from "@angular/core/testing";
import { FunctionalitiesComponent } from "./functionalities.component";

describe("AppComponent", () => {
  let component: FunctionalitiesComponent;
  let fixture: ComponentFixture<FunctionalitiesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FunctionalitiesComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });
});
