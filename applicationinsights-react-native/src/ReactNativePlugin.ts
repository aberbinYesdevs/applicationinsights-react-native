// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.


import { IDeviceInfoModule } from "./Interfaces/IDeviceInfoModule";
import { ReactNativeManualDevicePlugin } from "./ReactNativeManualDevicePlugin";


export class ReactNativePlugin extends ReactNativeManualDevicePlugin {

    public getReactNativeDeviceInfo: IDeviceInfoModule;

    constructor(_getReactNativeDeviceInfo) {
        super();
        this.getReactNativeDeviceInfo = _getReactNativeDeviceInfo;
    }

    protected getDeviceInfoModule(_deviceInfoModule): IDeviceInfoModule {
        return _deviceInfoModule || this.getReactNativeDeviceInfo;
    }
}
