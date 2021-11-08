/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
// Function that launches the app site and will return the index html file
 function doGet(e) {
  // Normal full form launch to complete
  if(e.parameter.customform == "t") {
    var htmlOutput = HtmlService.createTemplateFromFile('index').evaluate();
    //Logger.log(htmlOutput.getContent());
    return htmlOutput.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  } else {
    return HtmlService.createHtmlOutput('<h2>Malformed URL.  Contact application administrator.</h2>');
  }  
}}
