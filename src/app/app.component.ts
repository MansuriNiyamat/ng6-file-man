import {Component} from '@angular/core';
// import {TreeModel, NodeInterface, ConfigInterface} from 'ng6-file-man';
import {TreeModel, NodeInterface, ConfigInterface, FileSizePipe} from '../../projects/file-manager/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tree: TreeModel;
  node: NodeInterface;
  appLanguage = 'en';

  constructor() {
    const treeConfig: ConfigInterface = {
     // baseURL: 'http://localhost:8082/',
      baseURL: 'http://172.16.60.253:5001/',
      api: {
        listFile: 'api/list',
        uploadFile: 'api/upload',
        downloadFile: 'api/download',
        deleteFile: 'api/remove',
        createFolder: 'api/directory',
        renameFile: 'api/rename',
        searchFiles: 'api/search',
        signPostUrl: 'api/sign',
      },
      options: {
        allowFolderDownload: false,
        showFilesInsideTree: false
      }
    };

    this.tree = new TreeModel(treeConfig);
    this.node = this.tree.nodes;
  }

  // noinspection JSUnusedLocalSymbols
  itemSelected(event: any) {
    console.log(event);
  }
  itemClicked(event: any) {
    console.log(event);
  }
}
