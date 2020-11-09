import { Pipe } from '@angular/core';

export function mockPipe(options: Pipe): Pipe {
    const metadata: Pipe = {
      name: options.name
    };

    return <any>Pipe(metadata)(class MockPipe {});
}
