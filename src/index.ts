import "@girs/gobject-2.0";
import GObject from "gi://GObject";

export function registerClass<
    Props extends { [key: string]: GObject.ParamSpec },
    Interfaces extends { $gtype: GObject.GType }[],
    Sigs extends {
        [key: string]: {
            param_types?: readonly GObject.GType[];
            [key: string]: any;
        };
    }
>(
    opts: {
        GTypeName?: string;
        GTypeFlags?: GObject.TypeFlags;
        Properties?: Props;
        Signals?: Sigs;
        Implements?: Interfaces;
        RequiresComponents?: any[];
        CssName?: string;
        Template?: string;
        Children?: string[];
        InternalChildren?: string[];
    } = {}
) {
    return <T extends GObject.AnyClass>(constructor: T) => {
        GObject.registerClass(opts, constructor);
        return constructor as T & GObject.ObjectClass;
    };
}