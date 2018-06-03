
import { Component } from '@angular/core';
// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';


// Route Configuration
export const routes: Routes = [
    { path: '', component: TestComponent },
    { path: 'test1', component: TestComponent },
    { path : 'test2', component: Test2Component },
    { path : 'test3', component: Test3Component }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});