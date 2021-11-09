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

// Sends an invite to the user (email) for a given eventId (Google calendar invite ID)

function sendInvite(user, eventId) {
  return new Promise((resolve, reject) => {
    try {
      //Event ID needs to be decoded first and get data as string
      const decode = Utilities.base64Decode(eventId, Utilities.Charset.UTF_8)
      const blobString = Utilities.newBlob(decode).getDataAsString();
      // split by space and first element will be the calUId
      const strSplit = blobString.split(" ");
      // second element of strSplit will contain the calendarId
      const calendar = Calendar.CalendarList.get(strSplit[1]);
//      console.log(calendar.id);
      const event = Calendar.Events.get(calendar.id, strSplit[0]);
//      console.log(event)
      let attendees = event.attendees ? event.attendees : event.attendees = [];
      attendees.push({email: user});
//      console.log(attendees)
      const resource = { attendees: attendees };
      const args = { sendUpdates: "all" };
      // add user to event and return the promise 
      // Patch will send a calendar invite to the newly added user
      Calendar.Events.patch(resource, calendar.id, event.id, args);  
      resolve("Successfully added to event, please ensure to check your email for the notification")
    } catch(err) {
      console.error(err)
      reject(`Failed to locate event`)
    }
  })
}
