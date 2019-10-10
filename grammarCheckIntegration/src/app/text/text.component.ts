import { Component, OnInit } from '@angular/core';
// import fs from 'fs';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.less']
})
export class TextComponent implements OnInit {

  text='';
  // PWA = require('pro_writing_aid_ts');
  // fs = require('fs');
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log("submitted", this.text);
    var SpellChecker = require('simple-spellchecker');
    // var dictionary = SpellChecker.getDictionary("fr-FR");
    // console.log("disctornary", dictionary);
    // let fs: typeof fs = window['require']('fs');

    // SpellChecker.getDictionary("en-US","./node_modules/simple-spellchecker/dict", function(err, dictionary) {
    // console.log("inside dic", err, dictionary );
    // if(!err) {
    //   var misspelled = ! dictionary.spellCheck(this.text);
    //     if(misspelled) {
    //         var suggestions = dictionary.getSuggestions(this.text);
    //         console.log("suggested", suggestions);       
    //     }
    // }
// }); 

// var SpellChecker = require('simple-spellchecker');
// var myDictionary;
// //  console.log(myDictionary);
 
// // Load dictionary.
// SpellChecker.getDictionary("en-US", function(err, result) {
//   console.log("err dic", err, result);
   
//   if(!err) {
//         myDictionary = result;
//     }
// });
}

// let api = new this.PWA.HtmlApi();
// api.setApiKey(this.PWA.ApiKeys.licenseCode, '$Your license code$');

// let request = new this.PWA.HtmlAnalysisRequest();
// request.Html = 'I\'d like to by that toy. wood you help me? I have twp more brothers.';
// request.Reports = ['grammar'];
// request.Language = this.PWA.LanguageEnum.En;
// request.Style = this.PWA.StyleEnum.General;

// api.post(request)
//     .then(function (data) {
//         console.log('API called successfully. Returned data: ');
//         console.log(data.Body);
//     }, function (error) {
//         console.error(error);
//     })
/* Example of what you will get
API called successfully. Returned data: 
{ Html: 'I\'d like to <span class=\'pwa pwa1 pwa-color pwa-blue\' title=\'Possible confused word\' data-report=\'grammar\' data-suggestions=\'buy\' data-index=\'0\' data-category=\'grammargrammar\' data-sub-category=\'by\' data-urls=\'\' data-help=\'CTF_BY_13_.9990\' data-original-text=\'by\' data-tag-id=\'cad77c6f-9553-4b4c-87a6-44cd7bd2c740\'>by</span> that toy. wood you help me? I have <span class=\'pwa pwa1 pwa-color pwa-blue\' title=\'Possible confused word\' data-report=\'grammar\' data-suggestions=\'two\' data-index=\'1\' data-category=\'grammargrammar\' data-sub-category=\'twp\' data-urls=\'\' data-help=\'CTF_TWP_11_.9998\' data-original-text=\'twp\' data-tag-id=\'1de06ac4-bd40-4429-accd-e82406eb525e\'>twp</span> more brothers.',
  WordCount: 16,
  Summaries: 
   [ { ReportDisplayName: 'Grammar Check',
       ReportName: 'grammar',
       SummaryItems: [Object],
       NumberOfIssues: 2,
       ReportDescription: 'Checks your text for grammar errors and potential word mis-use.' } ] }
 */
  
}
