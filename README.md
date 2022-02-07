# mkorangebeesinterview

Angular Coding Test by Michael Kunchal for Orange Bees - Front End Angular Developer Position

Updated to Angular 13 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Commenting using - MARK -

The most important comments throughout the project are denoted with the - MARK - phrase.

### Module and Route 

The InputModule which has the form for the project is the Lazy Loaded Component which contains its own routing file that routes back to the DisplayComponent . The unmatched routes default to the 'input' route.

### Form

The Reactive Form is in the InputModule, the form doesn't submit and the proper validation is in place. Submitting executes a POST request that has a 1000 timeout. Since the API is invalid this was done so it wouldn't have to wait for an automatic timeout which could take a few minutes. All form components are using Angular Material.

### List

Displayed the list of elements that is retrieved from the GET Api call in a Material Table. There is a timeout and this defaults to using a fakeData list of IMember. IMember is an Interface to define the data model talked about in the Form section. Went a little above and you can sort the list BY ASC/DESC Email Address, Created and Email Type ID.

### Api Request

The API requests were written with HttpClient, are handled with Observable Error Handling and return Observables.
The Global Service to call the API is the ApiService in framework/services/api

### Edits

Adding Mobile Responsive Support for the Material Table and some better styling (It is supported for the Form on the InputComponent)

### Tests

Implemented Github Actions in the .github/workflows directory to specify the Node version of '14.x' and run ng test using ChromeHeadlessCI


### End Note

I hope this suffices as I think it is a good guage of the tip of what I am able to do. With more time and planning I can create some great Angular Applications. I hope you enjoy this and please let me know if there is anything you would like me to add and I would be happy to! Thanks!
