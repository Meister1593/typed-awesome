/** @noSelfInFile */
/** @noResolution */

declare module "gears" {
    namespace shape {
        function partially_rounded_rect(cairoContext: any,
            width: number,
            height: number,
            topLeft: boolean,
            topRight: boolean,
            bottomLeft: boolean,
            bottomRight: boolean,
            radius: number): any
    }
}