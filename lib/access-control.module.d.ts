import { DynamicModule } from '@nestjs/common';
import { IAclModuleForFeatureOptions } from './types';
export declare class AccessControlModule {
    static forFeature(options: IAclModuleForFeatureOptions): DynamicModule;
}
