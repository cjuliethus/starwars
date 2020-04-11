import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'starwars';
  movieList = [
    {
      id: 1,
      title: 'Movie title',
      episode: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa tortor, hendrerit quis arcu at, dignissim fringilla tortor. Donec et porttitor odio, quis euismod massa. Integer metus sem, scelerisque eget odio vel, vehicula dignissim velit. Suspendisse vulputate tincidunt nisi suscipit elementum. In hac habitasse platea dictumst. Phasellus ultricies elit id diam commodo aliquet. Suspendisse feugiat lectus id est imperdiet laoreet. Sed imperdiet commodo nulla. Cras sed enim viverra, accumsan dui in, convallis lectus. Phasellus placerat elit enim, non dictum ligula porta vel. Donec vel rutrum mauris. Maecenas a convallis sem. Mauris venenatis blandit elit ut pharetra. Nam posuere at ipsum sit amet auctor.',
      date: new Date(),
    },
    {
      id: 1,
      title: 'Movie title',
      episode: 2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa tortor, hendrerit quis arcu at, dignissim fringilla tortor. Donec et porttitor odio, quis euismod massa. Integer metus sem, scelerisque eget odio vel, vehicula dignissim velit. Suspendisse vulputate tincidunt nisi suscipit elementum. In hac habitasse platea dictumst. Phasellus ultricies elit id diam commodo aliquet. Suspendisse feugiat lectus id est imperdiet laoreet. Sed imperdiet commodo nulla. Cras sed enim viverra, accumsan dui in, convallis lectus. Phasellus placerat elit enim, non dictum ligula porta vel. Donec vel rutrum mauris. Maecenas a convallis sem. Mauris venenatis blandit elit ut pharetra. Nam posuere at ipsum sit amet auctor.',
      date: new Date(),
    },
    {
      id: 1,
      title: 'Movie title',
      episode: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa tortor, hendrerit quis arcu at, dignissim fringilla tortor. Donec et porttitor odio, quis euismod massa. Integer metus sem, scelerisque eget odio vel, vehicula dignissim velit. Suspendisse vulputate tincidunt nisi suscipit elementum. In hac habitasse platea dictumst. Phasellus ultricies elit id diam commodo aliquet. Suspendisse feugiat lectus id est imperdiet laoreet. Sed imperdiet commodo nulla. Cras sed enim viverra, accumsan dui in, convallis lectus. Phasellus placerat elit enim, non dictum ligula porta vel. Donec vel rutrum mauris. Maecenas a convallis sem. Mauris venenatis blandit elit ut pharetra. Nam posuere at ipsum sit amet auctor.',
      date: new Date(),
    },
    {
      id: 1,
      title: 'Movie title',
      episode: 4,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa tortor, hendrerit quis arcu at, dignissim fringilla tortor. Donec et porttitor odio, quis euismod massa. Integer metus sem, scelerisque eget odio vel, vehicula dignissim velit. Suspendisse vulputate tincidunt nisi suscipit elementum. In hac habitasse platea dictumst. Phasellus ultricies elit id diam commodo aliquet. Suspendisse feugiat lectus id est imperdiet laoreet. Sed imperdiet commodo nulla. Cras sed enim viverra, accumsan dui in, convallis lectus. Phasellus placerat elit enim, non dictum ligula porta vel. Donec vel rutrum mauris. Maecenas a convallis sem. Mauris venenatis blandit elit ut pharetra. Nam posuere at ipsum sit amet auctor.',
      date: new Date(),
    },
  ];
}
