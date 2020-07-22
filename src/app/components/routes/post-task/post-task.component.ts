import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../../services/category.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; import { LoginService } from '../../../services/login.service';
import { CacheService } from '../../../services/cache.service';
import { TaskService } from '../../../services/task.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ProfessionalsService } from 'src/app/services/professionals.service';
@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.css']
})
export class PostTaskComponent implements OnInit {
  allCategories: any;
  joinForm: FormGroup;
  categoryId: any
  categoryListId: any;
  currentViewId = 0
  subCateList = []
  userAddress: any;
  subCategorysList: any;
  isValid: boolean = false;
  taskDetail: any;
  subCategoryList: any;
  pageTitle = 'Post Task'
  imageSrc = "../../../assets/template/images/Plumbing-banner.png"

  constructor(private cacheService: CacheService, private CategoryService: CategoryService,
    private router: Router, private toastrManager: ToastrManager,
    private fb: FormBuilder, private loginService: LoginService, private professionalService: ProfessionalsService, private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.cacheService.getCache('token').token != undefined) {
      this.currentViewId = 0
    }
    else {
      let _url = '/login?page=task';
      this.router.navigateByUrl(_url)
    }
  }

  selectedCategory(categoryId) {
    if (categoryId) {
      console.log(categoryId)
      this.CategoryService.getAllSubCategories(categoryId).subscribe(res => {
        this.subCategoryList = res['data']
      })
      this.currentViewId = 1
      console.log(categoryId)
      this.isValid = true;
      this.categoryListId = categoryId
    }
    else {
      this.isValid = false;
    }
  }

  subCategoryListValue(values) {
    this.subCateList = values
    console.log(values)
    if (values === 'Back') {
      this.currentViewId = 0
    }
    else {
      window.scroll(0, 0)
      if (this.cacheService.getCache('token').token != undefined) {
        this.currentViewId = 4
      }
      else {
        this.currentViewId = 3
      }
    }
  }


  addressData(address) {
    if (address === 'Back') {
      this.currentViewId = 4
    }
    else {
      console.log(this.cacheService.getCache('token').token)
      console.log('working', address)
      this.userAddress = address

      let y = [];
      this.subCateList.map(x => {
        y.push(x.subCategoryId)
      })
      let proUserObj = {
        categoryId: parseInt(this.categoryListId),
        subCatagoriesId: y,
        address: this.userAddress,
        title: this.taskDetail.title,
        description: this.taskDetail.description,
        price: this.taskDetail.price,
        user: this.cacheService.getUserDetails()
      }
      console.log('alldata', proUserObj, this.cacheService.getUserDetails())
      this.taskService.createTask(proUserObj).subscribe(res => {
        this.router.navigateByUrl('')
        if (res['success']) {
          this.toastrManager['successToastr'](
            'success',
            'Task created',
            {
              enableHTML: true,
              showCloseButton: true
            }
          );
        }
        else {
          this.toastrManager['errorToastr'](
            'error',
            'Validation Error(s)',
            {
              enableHTML: true,
              showCloseButton: true
            }
          );
        }
      })
    }
  }

  onLoginEvent(value) {
    console.log(value)
    this.currentViewId = 3
  }

  registration(value) {
    if (value == 'true') {
      this.currentViewId = 3
    }
  }

  taskDetails(task) {
    if (task === 'Back') {
      this.currentViewId = 1
    }
    else {
      if (task) {
        this.currentViewId = 2
        this.taskDetail = task
      }
    }
  }
}