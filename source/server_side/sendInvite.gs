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
      // CALENDAR_ID is the global ID specified in "globals"
      const calendar = CalendarApp.getCalendarById(CALENDAR_ID); 
      const event = calendar.getEventById(`${strSplit[0]}@google.com`)
//      Logger.log(event)
      // add user to event and return the promise 
      event.addGuest(user)
      resolve("Successfully added to event, please click the Google Calendar button below to add the event to your calendar")
    } catch(err) {
      Logger.log(err)
      reject(`Failed to locate event`)
    }
  })
}
