import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { DynamicService } from '../dynamic.service';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-dynamic-builder',
  templateUrl: './dynamic-builder.component.html',
  styleUrls: ['./dynamic-builder.component.css']
})
export class DynamicBuilderComponent implements OnInit {

  @ViewChild("appContainer", { read: ViewContainerRef }) container;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private dynamicService: DynamicService) { }

  ngOnInit() {

    this.container.clear();
    this.dynamicService.getMetadata()
      .subscribe( data => {

        data.forEach(element => {
          
          console.log(' element to be built', JSON.stringify(element));
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(InputComponent);
          const componentRef: ComponentRef<InputComponent> = this.container.createComponent(componentFactory);
          console.log(' componentRef', componentRef);
          componentRef.instance.type = element.type;
          componentRef.instance.value = element.value;
          console.log(' componentRef instance', componentRef.instance);
        });

      }, err => {
          console.log('error in getting metadata');
      });
  }

}
