// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/6d5af489f805b5033b77b213d39c2a7196f98b48/dagre/dagre.d.ts
declare namespace Dagre {
    interface DagreFactory {
        graphlib: GraphLib;
        layout(graph: Graph): void;
    }

    interface Graph {
        new (): Graph;
        edges(): Edge[];
        edge(id: any): any;
        nodes(): string[];
        node(id: any): any;
        setDefaultEdgeLabel(callback: () => void): Graph;
        setEdge(sourceId: string, targetId: string, options?: { [key: string]: any }): Graph;
        setGraph(options: { [key: string]: any }): Graph;
        setNode(id: string, node: { [key: string]: any }): Graph;
    }

    interface Edge {
        v: string;
        w: string;
    }

    interface GraphLib {
        Graph: Graph;
    }
}

declare var dagre: Dagre.DagreFactory;

declare module "dagre" {
    export = dagre;
}