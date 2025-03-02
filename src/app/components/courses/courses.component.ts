import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CoursesService } from '../../services/courses.service';
import { CommonModule } from '@angular/common';
import { TechFilterComponent } from "../tech-filter/tech-filter.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, TechFilterComponent, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  onlyAvailableTest = false;

  technologySelected : string='';

  techData = [
    { name: 'Angular', image: '../../../assets/technologies/angular.svg' },
    { name: 'React', image: '../../../assets/technologies/react.svg' },
    { name: 'Azure', image: '../../../assets/technologies/azure.svg' },
    {
      name: '.Net Core',
      image: '../../../assets/technologies/dotnet-core.svg',
    },
    {
      name: 'Javascript',
      image: '../../../assets/technologies/javascript.svg',
    },
    { name: 'Java', image: '../../../assets/technologies/java.svg' },
    { name: 'SQL', image: '../../../assets/technologies/sql.svg' },
    {
      name: 'React Native',
      image: '../../../assets/technologies/react-native.svg',
    },
    { name: 'AWS', image: '../../../assets/technologies/aws.svg' },
    { name: 'Docker', image: '../../../assets/technologies/docker.svg' },
  ]; // List of technologies with names and images
  
  
  constructor(private courseService: CoursesService) {}
 
 
  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  onTechSelected(tech: string): void {
    console.log(`${tech} selected`);
    this.technologySelected = tech;
    this.applyFilters();
  }

  applyFilters() {
    // Base filter: Filter courses by selected technology
    let filtered = this.courses.filter((course) =>
      course.title
        .toLocaleLowerCase()
        .startsWith(this.technologySelected.toLocaleLowerCase())
    );

    // Additional filter: Show only available tests if toggle is active
    if (this.onlyAvailableTest) {
      filtered = filtered.filter((course) => course.questionsAvailable);
    }
    
    this.filteredCourses = filtered;
  }
 
}
