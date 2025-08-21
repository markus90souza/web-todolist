import { Text } from "./components/text";

import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import { Icon } from "./components/icon";
import { Badge } from "./components/badge";
import { Button } from "./components/button";
import { Input } from "./components/input";

const App = () => {
  return (
    <div className="flex gap-4 flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-green-dark">Vite + React</h1>
      <Text as="p" variant="body-md-bold" className="text-pink-base">
        Edit <code>src/app.tsx</code> and save to test HMR updates.
      </Text>

      <div className="flex gap-2">
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={CheckIcon} />
        <Icon svg={PlusIcon} />
        <Icon animate svg={SpinnerIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={XIcon} />
      </div>

      <div className="flex gap-2">
        <Badge variant="primary" size="sm">
          5
        </Badge>
        <Badge variant="secondary" size="sm">
          5 DE 10
        </Badge>
      </div>

      <Button variant="primary" size="md" icon={PlusIcon}>
        Nova Tarefa
      </Button>

      <div className="flex gap-2">
        <Input />
      </div>
    </div>
  );
};

export { App };
