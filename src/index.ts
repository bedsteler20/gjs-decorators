import "@girs/gobject-2.0";
import GObject from "gi://GObject";

export function objectSpec<
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

@objectSpec({
    GTypeName: "MyObject",
    Properties: {
        prop1: GObject.ParamSpec.string(
            "prop1",
            "Prop1",
            "Prop1",
            GObject.ParamFlags.READWRITE,
            "default"
        ),
        prop2: GObject.ParamSpec.string(
            "prop2",
            "Prop2",
            "Prop2",
            GObject.ParamFlags.READWRITE,
            "default"
        ),
    },
})
class MyObject extends GObject.Object {
    constructor() {
        super();
    }
}


const obj = new MyObject();