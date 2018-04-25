// Copyright © 2017-2018 VMware, Inc. All Rights Reserved.
// SPDX-License-Identifier: BSD-2-Clause

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API_SERVER_URL } from '.';

const DEMO = {'blue': [{'url': '/assets/Accessories/bow-blue.png', 'type': 'bow'}, {'url': '/assets/Accessories/tie-blue.png', 'type': 'tie'}, {'url': '/assets/Bodies/body-blue.png', 'type': 'body'}, {'url': '/assets/Bodies/body-violet.png', 'type': 'body'}], 'light blue': [{'url': '/assets/Accessories/bow-blue.png', 'type': 'bow'}, {'url': '/assets/Accessories/tie-blue.png', 'type': 'tie'}, {'url': '/assets/Bodies/body-blue.png', 'type': 'body'}], 'red': [{'url': '/assets/Accessories/bow-red.png', 'type': 'bow'}, {'url': '/assets/Accessories/glasses.png', 'type': 'bow'}, {'url': '/assets/Bodies/body-orange.png', 'type': 'body'}], 'yellow': [{'url': '/assets/Accessories/bow-yellow.png', 'type': 'bow'}, {'url': '/assets/Accessories/tie-yellow.png', 'type': 'tie'}], 'cute': [{'url': '/assets/Accessories/bow-yellow.png', 'type': 'bow'}, {'url': '/assets/Accessories/glasses.png', 'type': 'bow'}], 'mustache': [{'url': '/assets/Accessories/mustache-scruffy.png', 'type': 'mustache'}, {'url': '/assets/Accessories/mustache-straight.png', 'type': 'mustache'}], 'scruffy': [{'url': '/assets/Accessories/mustache-scruffy.png', 'type': 'mustache'}], 'scraggly': [{'url': '/assets/Accessories/mustache-scruffy.png', 'type': 'mustache'}], 'old-timey': [{'url': '/assets/Accessories/mustache-straight.png', 'type': 'mustache'}], 'thin': [{'url': '/assets/Accessories/mustache-straight.png', 'type': 'mustache'}], 'straight': [{'url': '/assets/Accessories/mustache-straight.png', 'type': 'mustache'}], 'tie': [{'url': '/assets/Accessories/tie-black.png', 'type': 'tie'}, {'url': '/assets/Accessories/tie-blue.png', 'type': 'tie'}, {'url': '/assets/Accessories/tie-yellow.png', 'type': 'tie'}], 'black': [{'url': '/assets/Accessories/tie-black.png', 'type': 'tie'}], 'serious': [{'url': '/assets/Accessories/tie-black.png', 'type': 'tie'}, {'url': '/assets/Arms/arms-on-waist.png', 'type': 'arms'}], 'business': [{'url': '/assets/Accessories/tie-black.png', 'type': 'tie'}], 'dark blue': [{'url': '/assets/Accessories/tie-blue.png', 'type': 'tie'}, {'url': '/assets/Bodies/body-violet.png', 'type': 'body'}], 'purple': [{'url': '/assets/Accessories/tie-blue.png', 'type': 'tie'}, {'url': '/assets/Bodies/body-light-plum.png', 'type': 'body'}], 'nice': [{'url': '/assets/Accessories/tie-blue.png', 'type': 'tie'}], 'fun': [{'url': '/assets/Accessories/tie-yellow.png', 'type': 'tie'}], 'silly': [{'url': '/assets/Accessories/tie-yellow.png', 'type': 'tie'}], 'crossed': [{'url': '/assets/Arms/arms-crossed.png', 'type': 'arms'}], 'think': [{'url': '/assets/Arms/arms-crossed.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-neutral.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-talking.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-whatever.png', 'type': 'arms'}, {'url': '/assets/Faces/face-neutral.png', 'type': 'face'}], 'upset': [{'url': '/assets/Arms/arms-crossed.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-raised.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-whatever.png', 'type': 'arms'}, {'url': '/assets/Faces/face-angry.png', 'type': 'face'}, {'url': '/assets/Faces/face-confused.png', 'type': 'face'}, {'url': '/assets/Faces/face-sad.png', 'type': 'face'}, {'url': '/assets/Faces/face-shocked.png', 'type': 'face'}], 'distressed': [{'url': '/assets/Arms/arms-crossed.png', 'type': 'arms'}], 'sad': [{'url': '/assets/Arms/arms-crossed.png', 'type': 'arms'}, {'url': '/assets/Faces/face-confused.png', 'type': 'face'}, {'url': '/assets/Faces/face-sad.png', 'type': 'face'}], 'unhappy': [{'url': '/assets/Arms/arms-crossed.png', 'type': 'arms'}], 'puzzled': [{'url': '/assets/Arms/arms-crossed.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-scratching.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-thinking.png', 'type': 'arms'}, {'url': '/assets/Faces/face-confused.png', 'type': 'face'}, {'url': '/assets/Faces/face-sad.png', 'type': 'face'}], 'default': [{'url': '/assets/Arms/arms-neutral.png', 'type': 'arms'}, {'url': '/assets/Bodies/body-blue.png', 'type': 'body'}, {'url': '/assets/Faces/face-neutral.png', 'type': 'face'}, {'url': '/assets/Heads/head-pale.png', 'type': 'head'}, {'url': '/assets/Locations/default.png', 'type': 'location'}], 'neutral': [{'url': '/assets/Arms/arms-neutral.png', 'type': 'arms'}, {'url': '/assets/Bodies/body-blue.png', 'type': 'body'}, {'url': '/assets/Faces/face-neutral.png', 'type': 'face'}], 'talk': [{'url': '/assets/Arms/arms-neutral.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-talking.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-whatever.png', 'type': 'arms'}, {'url': '/assets/Faces/face-talking.png', 'type': 'face'}, {'url': '/assets/Locations/phone-conversation.png', 'type': 'location'}], 'phone': [{'url': '/assets/Arms/arms-on-phone.png', 'type': 'arms'}, {'url': '/assets/Locations/phone-conversation.png', 'type': 'location'}], 'call': [{'url': '/assets/Arms/arms-on-phone.png', 'type': 'arms'}, {'url': '/assets/Faces/face-talking.png', 'type': 'face'}], 'waist': [{'url': '/assets/Arms/arms-on-waist.png', 'type': 'arms'}], 'determined': [{'url': '/assets/Arms/arms-on-waist.png', 'type': 'arms'}], 'confident': [{'url': '/assets/Arms/arms-on-waist.png', 'type': 'arms'}], 'ready': [{'url': '/assets/Arms/arms-on-waist.png', 'type': 'arms'}, {'url': '/assets/Faces/face-happy.png', 'type': 'face'}, {'url': '/assets/Faces/face-talking.png', 'type': 'face'}], 'prepared': [{'url': '/assets/Arms/arms-on-waist.png', 'type': 'arms'}], 'angry': [{'url': '/assets/Arms/arms-on-waist.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-whatever.png', 'type': 'arms'}, {'url': '/assets/Faces/face-angry.png', 'type': 'face'}], 'pissed': [{'url': '/assets/Arms/arms-on-waist.png', 'type': 'arms'}, {'url': '/assets/Faces/face-angry.png', 'type': 'face'}], 'mad': [{'url': '/assets/Arms/arms-on-waist.png', 'type': 'arms'}], 'righteous': [{'url': '/assets/Arms/arms-on-waist.png', 'type': 'arms'}], 'excited': [{'url': '/assets/Arms/arms-raised.png', 'type': 'arms'}, {'url': '/assets/Faces/face-happy.png', 'type': 'face'}, {'url': '/assets/Faces/face-talking.png', 'type': 'face'}], 'panicked': [{'url': '/assets/Arms/arms-raised.png', 'type': 'arms'}], 'alarmed': [{'url': '/assets/Arms/arms-raised.png', 'type': 'arms'}], 'frustrated': [{'url': '/assets/Arms/arms-raised.png', 'type': 'arms'}], 'despair': [{'url': '/assets/Arms/arms-raised.png', 'type': 'arms'}], 'incredulous': [{'url': '/assets/Arms/arms-raised.png', 'type': 'arms'}], 'shocked': [{'url': '/assets/Arms/arms-raised.png', 'type': 'arms'}, {'url': '/assets/Faces/face-shocked.png', 'type': 'face'}], 'overjoyed': [{'url': '/assets/Arms/arms-raised.png', 'type': 'arms'}, {'url': '/assets/Faces/face-happy.png', 'type': 'face'}], 'worried': [{'url': '/assets/Arms/arms-raised.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-scratching.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-talking.png', 'type': 'arms'}, {'url': '/assets/Faces/face-sad.png', 'type': 'face'}, {'url': '/assets/Faces/face-shocked.png', 'type': 'face'}], 'confused': [{'url': '/assets/Arms/arms-scratching.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-thinking.png', 'type': 'arms'}, {'url': '/assets/Faces/face-confused.png', 'type': 'face'}, {'url': '/assets/Faces/face-sad.png', 'type': 'face'}], 'perplexed': [{'url': '/assets/Arms/arms-scratching.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-thinking.png', 'type': 'arms'}, {'url': '/assets/Faces/face-confused.png', 'type': 'face'}, {'url': '/assets/Faces/face-sad.png', 'type': 'face'}], 'vexed': [{'url': '/assets/Arms/arms-scratching.png', 'type': 'arms'}, {'url': '/assets/Faces/face-confused.png', 'type': 'face'}], 'lost': [{'url': '/assets/Arms/arms-scratching.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-thinking.png', 'type': 'arms'}], 'stumped': [{'url': '/assets/Arms/arms-scratching.png', 'type': 'arms'}], 'explain': [{'url': '/assets/Arms/arms-talking.png', 'type': 'arms'}, {'url': '/assets/Arms/arms-whatever.png', 'type': 'arms'}, {'url': '/assets/Faces/face-talking.png', 'type': 'face'}], 'baffled': [{'url': '/assets/Arms/arms-thinking.png', 'type': 'arms'}], 'thinking': [{'url': '/assets/Arms/arms-thinking.png', 'type': 'arms'}], 'pensive': [{'url': '/assets/Arms/arms-thinking.png', 'type': 'arms'}], 'wonder': [{'url': '/assets/Arms/arms-thinking.png', 'type': 'arms'}], 'happy': [{'url': '/assets/Arms/arms-thumbs.png', 'type': 'arms'}, {'url': '/assets/Faces/face-happy.png', 'type': 'face'}, {'url': '/assets/Faces/face-talking.png', 'type': 'face'}], 'satisfied': [{'url': '/assets/Arms/arms-thumbs.png', 'type': 'arms'}], 'done': [{'url': '/assets/Arms/arms-thumbs.png', 'type': 'arms'}], 'exasperated': [{'url': '/assets/Arms/arms-whatever.png', 'type': 'arms'}, {'url': '/assets/Faces/face-angry.png', 'type': 'face'}], 'nonchalant': [{'url': '/assets/Arms/arms-whatever.png', 'type': 'arms'}], 'classy': [{'url': '/assets/Bodies/body-blue.png', 'type': 'body'}], 'green': [{'url': '/assets/Bodies/body-green.png', 'type': 'body'}], 'plum': [{'url': '/assets/Bodies/body-light-plum.png', 'type': 'body'}], 'pink': [{'url': '/assets/Bodies/body-light-plum.png', 'type': 'body'}], 'lavender': [{'url': '/assets/Bodies/body-light-plum.png', 'type': 'body'}], 'orange': [{'url': '/assets/Bodies/body-orange.png', 'type': 'body'}], 'violet': [{'url': '/assets/Bodies/body-violet.png', 'type': 'body'}], 'disappointed': [{'url': '/assets/Faces/face-confused.png', 'type': 'face'}], 'stressed': [{'url': '/assets/Faces/face-confused.png', 'type': 'face'}, {'url': '/assets/Faces/face-sad.png', 'type': 'face'}, {'url': '/assets/Faces/face-shocked.png', 'type': 'face'}], 'successful': [{'url': '/assets/Faces/face-happy.png', 'type': 'face'}], 'relaxed': [{'url': '/assets/Faces/face-happy.png', 'type': 'face'}], 'glad': [{'url': '/assets/Faces/face-happy.png', 'type': 'face'}], 'pale': [{'url': '/assets/Heads/head-pale.png', 'type': 'head'}], 'light': [{'url': '/assets/Heads/head-light.png', 'type': 'head'}], 'medium': [{'url': '/assets/Heads/head-medium.png', 'type': 'head'}], 'bronze': [{'url': '/assets/Heads/head-bronze.png', 'type': 'head'}], 'dark': [{'url': '/assets/Heads/head-dark.png', 'type': 'head'}], 'city': [{'url': '/assets/Locations/city.png', 'type': 'location'}], 'skyline': [{'url': '/assets/Locations/city.png', 'type': 'location'}], 'away': [{'url': '/assets/Locations/city.png', 'type': 'location'}], 'travel': [{'url': '/assets/Locations/city.png', 'type': 'location'}], 'company': [{'url': '/assets/Locations/company.png', 'type': 'location'}], 'work': [{'url': '/assets/Locations/company.png', 'type': 'location'}, {'url': '/assets/Locations/office.png', 'type': 'location'}], 'outside': [{'url': '/assets/Locations/company.png', 'type': 'location'}], 'coming': [{'url': '/assets/Locations/company.png', 'type': 'location'}], 'leaving': [{'url': '/assets/Locations/company.png', 'type': 'location'}], 'arrive': [{'url': '/assets/Locations/company.png', 'type': 'location'}], 'conversation': [{'url': '/assets/Locations/computer-conversation.png', 'type': 'location'}, {'url': '/assets/Locations/phone-conversation.png', 'type': 'location'}, {'url': '/assets/Locations/watercooler.png', 'type': 'location'}], 'split': [{'url': '/assets/Locations/computer-conversation.png', 'type': 'location'}], 'two': [{'url': '/assets/Locations/computer-conversation.png', 'type': 'location'}], 'chat': [{'url': '/assets/Locations/computer-conversation.png', 'type': 'location'}, {'url': '/assets/Locations/watercooler.png', 'type': 'location'}], 'computer': [{'url': '/assets/Locations/computer-conversation.png', 'type': 'location'}, {'url': '/assets/Locations/computer-diagonal.png', 'type': 'location'}], 'email': [{'url': '/assets/Locations/computer-conversation.png', 'type': 'location'}], 'coffee': [{'url': '/assets/Locations/computer-diagonal.png', 'type': 'location'}], 'screen': [{'url': '/assets/Locations/computer-diagonal.png', 'type': 'location'}], 'look': [{'url': '/assets/Locations/computer-diagonal.png', 'type': 'location'}], 'desk': [{'url': '/assets/Locations/computer-diagonal.png', 'type': 'location'}, {'url': '/assets/Locations/office.png', 'type': 'location'}], 'app': [{'url': '/assets/Locations/computer-diagonal.png', 'type': 'location'}], 'home': [{'url': '/assets/Locations/couch.png', 'type': 'location'}], 'couch': [{'url': '/assets/Locations/couch.png', 'type': 'location'}], 'plant': [{'url': '/assets/Locations/couch.png', 'type': 'location'}], 'house': [{'url': '/assets/Locations/couch.png', 'type': 'location'}], 'break': [{'url': '/assets/Locations/couch.png', 'type': 'location'}, {'url': '/assets/Locations/watercooler.png', 'type': 'location'}], 'rest': [{'url': '/assets/Locations/couch.png', 'type': 'location'}], 'datacenter': [{'url': '/assets/Locations/datacenter.png', 'type': 'location'}], 'server': [{'url': '/assets/Locations/datacenter.png', 'type': 'location'}], 'rack': [{'url': '/assets/Locations/datacenter.png', 'type': 'location'}], 'connect': [{'url': '/assets/Locations/datacenter.png', 'type': 'location'}], 'find': [{'url': '/assets/Locations/datacenter.png', 'type': 'location'}], 'white': [{'url': '/assets/Locations/default.png', 'type': 'location'}], 'wall': [{'url': '/assets/Locations/default.png', 'type': 'location'}], 'blank': [{'url': '/assets/Locations/default.png', 'type': 'location'}], 'intro': [{'url': '/assets/Locations/introduction.png', 'type': 'location'}], 'arrow': [{'url': '/assets/Locations/introduction.png', 'type': 'location'}], 'meet': [{'url': '/assets/Locations/meetingroom.png', 'type': 'location'}], 'present': [{'url': '/assets/Locations/meetingroom.png', 'type': 'location'}], 'room': [{'url': '/assets/Locations/meetingroom.png', 'type': 'location'}], 'project': [{'url': '/assets/Locations/meetingroom.png', 'type': 'location'}], 'group': [{'url': '/assets/Locations/meetingroom.png', 'type': 'location'}, {'url': '/assets/Locations/team.png', 'type': 'location'}], 'report': [{'url': '/assets/Locations/meetingroom.png', 'type': 'location'}], 'office': [{'url': '/assets/Locations/office.png', 'type': 'location'}], 'team': [{'url': '/assets/Locations/office.png', 'type': 'location'}, {'url': '/assets/Locations/team.png', 'type': 'location'}], 'chair': [{'url': '/assets/Locations/office.png', 'type': 'location'}], 'day': [{'url': '/assets/Locations/office.png', 'type': 'location'}], 'speak': [{'url': '/assets/Locations/phone-conversation.png', 'type': 'location'}], 'discuss': [{'url': '/assets/Locations/phone-conversation.png', 'type': 'location'}, {'url': '/assets/Locations/watercooler.png', 'type': 'location'}], 'people': [{'url': '/assets/Locations/team.png', 'type': 'location'}], 'crowd': [{'url': '/assets/Locations/team.png', 'type': 'location'}], 'water': [{'url': '/assets/Locations/watercooler.png', 'type': 'location'}], 'hear': [{'url': '/assets/Locations/watercooler.png', 'type': 'location'}], 'locate': [{'url': '/assets/Locations/world.png', 'type': 'location'}], 'far': [{'url': '/assets/Locations/world.png', 'type': 'location'}], 'world': [{'url': '/assets/Locations/world.png', 'type': 'location'}], 'globe': [{'url': '/assets/Locations/world.png', 'type': 'location'}], 'across': [{'url': '/assets/Locations/world.png', 'type': 'location'}]};

@Injectable()
export class CharacteristicsApi {

  constructor(
    private http: Http
  ) {}

  public getCharacteristics(): Promise<any> {


    // return Promise.resolve(DEMO);

    // story-generator server endpoint
    const url = `${API_SERVER_URL}/assets`;

    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(response => {
          console.log('Asset Response:', response.json());
          resolve(response.json());
        });
    });
  }
}
