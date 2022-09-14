import { IAclGrant } from './types';
export declare class GrantsBuilder implements IAclGrant {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
    static canCreate(): GrantsBuilder;
    canCreate(): this;
    static canRead(): GrantsBuilder;
    canRead(): this;
    static any(): GrantsBuilder;
    any(): this;
}
