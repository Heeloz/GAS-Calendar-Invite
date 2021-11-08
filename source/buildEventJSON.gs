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

// Builds the event JSON info that will pull from the application site

function buildEventInfoJSON() {
  const eventJSON = [
    {eventId: "EVENT_ID", date: "DATE_STRING", time: "TIME_STRING"},
    {eventId: "EVENT_ID", date: "DATE_STRING", time: "TIME_STRING"},
    {eventId: "EVENT_ID", date: "DATE_STRING", time: "TIME_STRING"},
    {eventId: "EVENT_ID", date: "DATE_STRING", time: "TIME_STRING"}
    // Add as many events are needed for users to invite and choose from
  ]
  const prop = PropertiesService.getScriptProperties();
  prop.setProperty("EVENT_NAME_STRING", JSON.stringify(eventJSON))
}
